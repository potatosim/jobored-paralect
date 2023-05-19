import { getAccessToken } from 'helpers/getAccessToken';
import BaseApi from './BaseApi';
import { ApiEndpoints } from 'enum/ApiEndpoints';

export interface IndustryItem {
  title_trimmed: string;
  key: number;
}

export interface VacanciesSearchRequest {
  keyword?: string;
  payment_from?: number | '';
  payment_to?: number | '';
  catalogues?: number;
}

export interface VacanciesResponse {
  profession: string;
  firm_name: string;
  town: { title: string };
  catalogues: Array<{ title: string }>;
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
  vacancyRichText: string;
  id: number;
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

  async getVacancies({
    keyword = '',
    payment_from = '',
    payment_to = '',
    catalogues = 0,
  }: VacanciesSearchRequest) {
    const accessToken = await getAccessToken();

    const { data } = await this.instance.get<{ objects: VacanciesResponse[] }>(
      ApiEndpoints.Vacancies,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          keyword,
          payment_from,
          payment_to,
          catalogues,
          published: 1,
          no_agreement: !payment_from && !payment_to ? 0 : 1,
        },
      },
    );

    return data.objects.map((item) => ({
      profession: item.profession,
      town: item.town.title,
      workSchedule: item.type_of_work.title,
      paymentFrom: item.payment_from,
      paymentTo: item.payment_to,
      currency: item.currency,
      id: item.id,
    }));
  }

  async getVacancy(id: number) {
    const accessToken = await getAccessToken();

    const { data } = await this.instance.get<VacanciesResponse>(
      `${ApiEndpoints.Vacancies}/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return {
      profession: data.profession,
      town: data.town.title,
      workSchedule: data.type_of_work.title,
      paymentFrom: data.payment_from,
      paymentTo: data.payment_to,
      currency: data.currency,
      id: data.id,
      description: data.vacancyRichText,
    };
  }
}
