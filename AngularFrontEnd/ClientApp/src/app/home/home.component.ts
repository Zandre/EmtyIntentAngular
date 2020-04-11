import { Component, OnInit } from '@angular/core';
import { TestServiceProxyService } from 'src/@generated/service-proxies/test-service-proxy.service';
import { TestDTO } from 'src/@generated/dtos/test-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

constructor(private testProxy: TestServiceProxyService) {

}

  ngOnInit(): void {

    this.testProxy.getTestData().subscribe((testData: TestDTO) => {
      console.log('Always 2 there are, the Master, ', testData.master, ', and the apprentice, ', testData.apprentice);
    });
  }
}
