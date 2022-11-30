import axios from 'axios';
import type { Axios } from 'axios';
import GuessingEntity from '@/entities/GuessingEntity';
import GuessingNodeEntity from '@/entities/GuessingNodeEntity';
import { convertGuessingEntityDtoToGuessingEntity } from './dto';
import type { GuessingEntityDto, CreateGuessingRequestBody } from './dto';

// @ts-ignore-start
export default class GuessingApi {
  private axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://gai-hackathon.herokuapp.com/',
      timeout: 99000,
    });
  }

  static createGuessingApi() {
    return new GuessingApi();
  }

  public async createGuessing(author: string, prompt: string, parentId: string | null): Promise<GuessingEntity> {
    const requestBody: CreateGuessingRequestBody = {
      author,
      prompt,
      parent_id: parentId,
    };
    const { data } = await this.axios.post('/guessings', requestBody);
    const descendantGuessingDto: GuessingEntityDto = data;
    return convertGuessingEntityDtoToGuessingEntity(descendantGuessingDto);
  }

  public async getGuessing(id: string): Promise<GuessingEntity> {
    const { data } = await this.axios.get(`/guessings/${id}`);
    const descendantGuessingDto: GuessingEntityDto = data;

    return convertGuessingEntityDtoToGuessingEntity(descendantGuessingDto);
  }

  public async getGuessingTree(rootId: string): Promise<GuessingNodeEntity> {
    const gussingNodeMap: {
      [id: string]: GuessingNodeEntity;
    } = {};
    const rootGuessing = await this.getGuessing(rootId);
    gussingNodeMap[rootGuessing.getId()] = GuessingNodeEntity.newGuessingEntity(rootGuessing);

    const {
      data: { result },
    } = await this.axios.get(`/guessings/${rootId}/descendants`, {
      params: {
        limit: 100,
        offset: 0,
      },
    });
    const descendantGuessingDtos: GuessingEntityDto[] = result;

    descendantGuessingDtos.forEach((descendantGuessingDto) => {
      const guessing = convertGuessingEntityDtoToGuessingEntity(descendantGuessingDto);
      gussingNodeMap[descendantGuessingDto.id] = GuessingNodeEntity.newGuessingEntity(guessing);
    });

    Object.keys(gussingNodeMap).forEach((gussingNodeKey) => {
      const gussingNode = gussingNodeMap[gussingNodeKey];
      const parentGuessingNodeId = gussingNode.getParentId();
      if (parentGuessingNodeId) {
        const parentGuessingNode = gussingNodeMap[parentGuessingNodeId];
        if (parentGuessingNode) {
          parentGuessingNode.appendChild(gussingNode);
          gussingNode.setParent(parentGuessingNode);
        }
      }
    });

    return gussingNodeMap[rootId];
  }
}
// @ts-ignore-end
