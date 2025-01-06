import User from "../database/schema/User.js";

const fetchService = async () => {
  const user = await User.create({
    email: "teste33344444@gmail.com",
    password: "123",
  });

  return user;
};

const createService = async (body) => {
  const user = await User.create(body);
  return user;
};

const authService = async (body) => {
  if (!body.email) {
    return { error: true, message: "Dados faltantes", statusCode: 400 };
  }

  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });

  if (user == null) {
    return { error: true, message: "Dados inválidos", statusCode: 400 };
  }

  return user;
};

export { fetchService, createService, authService };
