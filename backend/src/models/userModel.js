import pool from "../config/mysql.js";

// Get all users
export const getAllUsersModel = async () => {
  const [rows] = await pool.query(`
    SELECT 
      id,
      name,
      email,
      role,
      avatar,
      created_at
    FROM users
    ORDER BY id DESC
  `);

  return rows;
};

// Get user by email
export const getUserByEmailModel = async (email) => {
  const [rows] = await pool.query(
    `
      SELECT * FROM users
      WHERE email = ?
    `,
    [email],
  );

  return rows[0];
};

// Get user by id
export const getUserByIdModel = async (id) => {
  const [rows] = await pool.query(
    `
      SELECT *
      FROM users
      WHERE id = ?
    `,
    [id],
  );

  return rows[0];
};

// Create user
export const createUserModel = async (name, email, password, role = "user") => {
  const [result] = await pool.query(
    `
      INSERT INTO users
      (
        name,
        email,
        password,
        role
      )
      VALUES (?, ?, ?, ?)
    `,
    [name, email, password, role],
  );

  return result;
};

// Delete user
export const deleteUserModel = async (id) => {
  const [result] = await pool.query(
    `
      DELETE FROM users
      WHERE id = ?
    `,
    [id],
  );

  return result;
};

// Update password
export const updatePasswordModel = async (id, hashedPassword) => {
  const [result] = await pool.query(
    `
        UPDATE users
        SET password = ?
        WHERE id = ?
        `,
    [hashedPassword, id],
  );

  return result;
};
