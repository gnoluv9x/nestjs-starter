import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { ChickenService } from './chicken.service';

@Injectable()
export class EggService {
  private _randomNumb: number;

  constructor(
    @Inject(forwardRef(() => ChickenService))
    private readonly chickenService: ChickenService,
  ) {
    console.log('Debug_here this.chickenService: ', this.chickenService);
    this.randomNumb = Math.random();
  }

  public get randomNumb(): number {
    return this._randomNumb;
  }
  public set randomNumb(value: number) {
    this._randomNumb = value;
  }
}
