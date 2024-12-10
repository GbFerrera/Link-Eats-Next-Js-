import { api } from "@/services/api";
import { User } from "@/types/User";

export const createUser = async (user: User) => {
  try {

    const response = await api.post("/users", 
      {
        name: user.name,
        email: user.email,
        password: user.password,
        phone_number: user.phone_number,
        perfil: user.perfil
      }, 
      {
        headers: {
          company_id: user.company_id.toString() 
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário", error);
    throw error; 
  }
};
