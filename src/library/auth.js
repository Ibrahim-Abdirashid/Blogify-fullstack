import supabase from "./supapase";

export async function signUp(email, password, username = "") {
  let { data, error } = await supabase.auth.signUp({
    email : email,
    password : password,
  });
}
