
'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import css from "./edit.module.css"
import { getMe, updateMe } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";


export default function EditProfile() {
  const router = useRouter();
   const setUser = useAuthStore((state) => state.setUser);
  const [username, setUserName] = useState('')
  const [email, setUserEmail] = useState('')

  useEffect(() => {
    getMe().then((user) => {
      setUserName(user.username ?? '');
      setUserEmail(user.email)
    });
  }, []);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
    const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUser = await updateMe({ username });
  setUser(updatedUser)
      router.refresh();
    router.push('/profile');
  };

    return (
        <main className={css.mainContent}>
  <div className={css.profileCard}>
    <h1 className={css.formTitle}>Edit Profile</h1>

    <Image src="https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"
      alt="User Avatar"
      width={120}
      height={120}
      className={css.avatar}
    />

    <form onSubmit={handleSaveUser} className={css.profileInfo}>
      <div className={css.usernameWrapper}>
        <label htmlFor="username">Username:</label>
              <input id="username"
                 value={username} 
          type="text"
                className={css.input}
                onChange={handleChange}
        />
      </div>

            <p>Email: { email} </p>

      <div className={css.actions}>
        <button type="submit" className={css.saveButton}>
          Save
        </button>
        <button type="button" className={css.cancelButton}  onClick={() => router.back()} >
          Cancel
        </button>
      </div>
    </form>
  </div>
</main>
    )
}