import { Injectable } from '@nestjs/common';
import { CAR_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brandsseed copy';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ) { }

  populateDB() {

    this.carsService.fillCarsWithSeedData(CAR_SEED);
    this.brandService.fillCarsWithSeedData(BRANDS_SEED);

    return 'SEED executed successfully'
  }

}
