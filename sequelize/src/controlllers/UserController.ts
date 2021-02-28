import { Request, Response } from 'express';

import userServices from '../services/userServices';
import utils from '../utils';

class UserController {
  async index(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string, 10) || 1;
      const limit = parseInt(req.query.limit as string, 10) || 10;

      const data = await userServices.index(page, limit);

      return res.send(utils.successResponse(data));

    } catch (error) {
      const { code, data } = utils.errorResponse(error);
      return res.status(code).send(data);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);

      const data = await userServices.show(id);

      return res.send(utils.successResponse(data));

    } catch (error) {
      const { code, data } = utils.errorResponse(error);
      return res.status(code).send(data);
    }
  }

  async store(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const data = await userServices.store(name, email);

      return res.status(201).send(utils.successResponse(data));

    } catch (error) {
      const { code, data } = utils.errorResponse(error);
      return res.status(code).send(data);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const { name, email } = req.body;

      const data = await userServices.update(id, name, email);

      return res.send(utils.successResponse(data));

    } catch (error) {
      const { code, data } = utils.errorResponse(error);
      return res.status(code).send(data);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const data = await userServices.delete(id);

      return res.send(utils.successResponse(data));

    } catch (error) {
      const { code, data } = utils.errorResponse(error);
      return res.status(code).send(data);
    }
  }
}

export default UserController;