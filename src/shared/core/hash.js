
import bcrypt from 'bcrypt'

import config from './config'


/* BCRYPT */

// Generate a password hash, using the bcrypt library.  We wrap this in a
// Promise to avoid using bcrypt's default callbacks
export async function generatePasswordHash(plainTextPassword) {
  return new Promise((ok, reject) => {
    bcrypt.genSalt(config.jwt.rounds, (saltError, salt) => {
      if (saltError) return reject(saltError);
      return bcrypt.hash(plainTextPassword, salt, (hashError, hash) => {
        if (saltError) return reject(saltError);
        return ok(hash);
      });
    });
  });
}

// Check a hashed password
export function verifyPassword(plainTextPassword, hash) {
  const password_bcrypt = hash.replace(/^\$2y(.+)$/i, '\$2a$1') //เพิ่มบรรทัดนี้เพื่อแปลงรหัสผ่านจาก password_hash เป็น bcrypt  
  const result = bcrypt.compareSync(plainTextPassword, password_bcrypt)
  // console.log('Result compareSync: ', result)
  return result
  // return new Promise((ok, reject) => (
  //   bcrypt.compare(plainTextPassword, password_bcrypt, (e, doesMatch) => {
  //     if (e) return reject(e);
  //     return ok(doesMatch);
  //   })
  // ));
}
