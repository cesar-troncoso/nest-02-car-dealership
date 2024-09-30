import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto copy";

@Controller("cars")
//@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  @Get(":id")
  getCarById(@Param("id", ParseUUIDPipe) id: string) {
    return this.carService.findOneById(id);
  }

  @Post()
  create(@Body() createCardDto: CreateCarDto) {
    return this.carService.create(createCardDto);
  }

  @Patch(":id")
  updateCar(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto
  ) {
    return updateCarDto;
  }

  @Delete(":id")
  deleteCar(@Param("id", ParseIntPipe) id: number) {
    return {
      message: `Car with id ${id} deleted`,
    };
  }
}
