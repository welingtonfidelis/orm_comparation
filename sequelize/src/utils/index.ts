interface ErrorItem {
  code: number;
  message: string[];
}

const methods = {
  successResponse(data: any) {
    return { ok: true, response: data };
  },

  errorResponse(error: ErrorItem) {
    console.log('ERROR ===> \n', error, '\n <=== ERROR');

    const code = this.validateHttpStatusCode(error.code) ? error.code : 500;
    const message = error.message || 'Internal server error';

    return { code, data: { ok: false, message } };
  },

  validateHttpStatusCode(code: Number | undefined) {
    const isValid = code
      && Number.isInteger(code)
      && code >= 100
      && code < 600;

    return isValid;
  }
}

export default methods;