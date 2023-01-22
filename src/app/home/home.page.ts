import { Component } from '@angular/core';
import { CalculatorPluginService } from './calculator-plugin.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  constructor(private calculatorPlugin: CalculatorPluginService) {}

  async testPlugin() {
    const result = await this.calculatorPlugin.sum(1, 3);
    alert(result);
  }
}
