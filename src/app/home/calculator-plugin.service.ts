import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

declare var cordova: any;

@Injectable({
  providedIn: 'root',
})
export class CalculatorPluginService {
  private readonly _pluginName: string = 'CalculatorPlugin';

  constructor(private platform: Platform) {}

  async sum(a: number, b: number): Promise<number> {
    await this.platform.ready();
    return new Promise((resolve, error) => {
      cordova.exec(
        (result: { sum: number }) => {
          resolve(result.sum);
        },
        (err: any) => {
          error(err);
        },
        this._pluginName,
        'sum',
        [a, b]
      );
    });
  }
}
