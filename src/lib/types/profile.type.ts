export type UserAPIResponse = {
  username: string;
  email: string;
  privilige_level: string;
  created_at: Date;
  updated_at: Date;
  profile: ProfileData;
};

export type ProfileData = {
  name: string;
  bio: string;
};
