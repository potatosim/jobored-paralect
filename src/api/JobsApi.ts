import BaseApi from './BaseApi';
import { ApiEndpoints } from 'enum/ApiEndpoints';

export interface IndustryItem {
  title_trimmed: string;
  key: number;
}

export default class JobsApi extends BaseApi {
  async getIndustries() {
    const { data } = await this.instance.get<IndustryItem[]>(ApiEndpoints.Catalogues);
    return data.map(({ key, title_trimmed }) => ({
      value: title_trimmed,
      label: title_trimmed,
      key,
    }));
  }
}
