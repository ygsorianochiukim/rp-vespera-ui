import { sampleModel } from '../models/sample.model';

export class SampleService {
  static async getAll(): Promise<sampleModel[]> {
    const response = await fetch('/api/samples');
    return await response.json();
  }
}