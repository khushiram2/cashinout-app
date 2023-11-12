import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
  } catch (error) {
    console.error("error while hashing password:", error);
    throw new Error("Error hashing password");
  }
};

export const comparePassword = async (original, hashed) => {
  try {
    const match = await bcrypt.compare(original, hashed);
    return match;
  } catch (error) {
    console.error("error while comparing passwords:", error);
    throw new Error("Error comparing passwords");
  }
};
