import { Inject, BadGatewayException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { STATUS_CODES } from "http";
import { IBaseService } from "../base/IBase.service";
import { BaseEntity } from "./base.entity";

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  create(entity: any): Promise<string> {
    try {
      return new Promise<string>((resolve, reject) => {
        this.genericRepository
          .save(entity)
          .then((created) => resolve(created.uid))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  getAll(skip = 0, limit = 20): Promise<T[]> {
    try {
      return <Promise<T[]>>(
        this.genericRepository.find({ skip: skip, take: limit })
      );
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  get(uid: string): Promise<T> {
    try {
    } catch (error) {
      throw new BadGatewayException(error);
    }
    return <Promise<T>>this.genericRepository.findOne(uid);
  }

  delete(uid: string) {
    try {
      this.genericRepository.delete(uid);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  update(entity: any): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.genericRepository
          .findByIds(entity.uid)
          .then((responseGet) => {
            try {
              if (responseGet == null) reject("Not existing");
              let retrievedEntity: any = responseGet as any;
              this.genericRepository
                .save(retrievedEntity)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
            } catch (e) {
              reject(e);
            }
          })
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
