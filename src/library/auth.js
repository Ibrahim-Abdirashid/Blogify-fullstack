import supabase from "./supapase";

export async function signUp(email, password, username = "") {
  let { data, error } = await supabase.auth.signUp({
    email : email,
    password : password,
  });

  // console.log(data);

  if(data?.user){
    const {data : sessionData} = await supabase.auth.getSession();

    if(!sessionData?.session){
      console.log("Session not found after sign-up.");
      
      return data;
    }


  const displayName = username || email.split('@')[0];

  // create profile
  const {data : profileData, error : profileError} = await supabase
  .from('users')
  .insert({
    id : data.user.id,
    username : displayName,
    avatar_url : null
  })

  .select()
  .single()

 if(profileError){
  console.error("Error creating profile:", profileError);
  
 }else{
  console.log("Profile created successfully:", profileData);
 }
   }
  return data;
}

export async function signIn(email, password){
  let {data, error} = await supabase.auth.signInWithPassword({
    email : email,
    password : password,
  })
console.log(data);

  if(error){
    throw error;
  }

  // check if user exits , if does'nt exitst so create

  if(data?.user){
    try {
      const profile = await getUserProfile(data.user.id);
      console.log("profile info" , profile);
      
      
    } catch (profileError) {
      console.error("error with profile", profileError);
      

      
    }
  }
}

export async function getUserProfile(userId) {

  // browserka ayaa laga soo helaya session-ka
  const {data : sessionData} = await supabase.auth.getSession();
  const {data :userData, error} = await supabase.from("users")
  .select("*")
  .eq("id", userId)
  .single()
  

  if(error && error.code === "PGRST116"){
    console.log("User profile not found:", userId);

      // get user email  to drive username if needed
    const email = userData?.user.email;
    const defaultUsername = email? email.split('@')[0] : `user_${Date.now()}`;

    // create profile
  const {data : newProfile, error : profileError} = await supabase
  .from('users')
  .insert({
    id : userId,
    username : defaultUsername,
    avatar_url : null
  })

  .select()
  .single()

 if(profileError){
  console.error("Error creating profile:", profileError);
  throw profileError;
  
 }else{
  console.log("Profile created successfully:", newProfile);
 }
 return newProfile;
  }

  // general error hadu jiro

  if(error){
    console.error("Error fetching user profile:", error);
    throw error;
    
  }
  console.log("existing profile");
  return sessionData;
  
}