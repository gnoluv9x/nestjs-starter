import { Inject, Injectable, Scope, forwardRef } from '@nestjs/common';
import { EggService } from './egg.service';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class ChickenService {
  private _randomNumb: number;

  constructor(
    @Inject(forwardRef(() => EggService))
    private readonly eggService: EggService,
  ) {
    console.log('Debug_here this.eggService: ', this.eggService);
    this.randomNumb = Math.random();
  }

  public get randomNumb(): number {
    return this._randomNumb;
  }
  public set randomNumb(value: number) {
    this._randomNumb = value;
  }
}
