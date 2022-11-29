import axios from 'axios';
import type { Axios } from 'axios';
import GuessingEntity from '@/entities/GuessingEntity';
import GuessingNodeEntity from '@/entities/GuessingNodeEntity';
import { GuessingEntityDto, CreateGuessingRequestBody } from './dto';

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

  public async createGuessing(author: string, prompt: string, parentId: string | null) {
    const requestBody: CreateGuessingRequestBody = {
      author,
      prompt,
      parent_id: parentId,
    };
    const { data } = await this.axios.post('/guessings', requestBody);
    console.log(data);
  }

  public async getGuessing(id: string): Promise<GuessingEntity> {
    const { data } = await this.axios.get(`/guessings/${id}`);
    const descendantGuessingDto: GuessingEntityDto = data;

    const guessing = GuessingEntity.newGuessingEntity(
      descendantGuessingDto.id,
      descendantGuessingDto.parent_id,
      descendantGuessingDto.state,
      descendantGuessingDto.image_url,
      descendantGuessingDto.author,
      descendantGuessingDto.prompt
    );
    return guessing;
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
      const guessing = GuessingEntity.newGuessingEntity(
        descendantGuessingDto.id,
        descendantGuessingDto.parent_id,
        descendantGuessingDto.state,
        descendantGuessingDto.image_url,
        descendantGuessingDto.author,
        descendantGuessingDto.prompt
      );
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
