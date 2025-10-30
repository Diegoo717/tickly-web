import React, { useState, type FormEvent } from "react";
import { supabase } from "../../lib/supabaseClient";
import styles from "./AuthForm.module.css";
import { Navigate } from "react-router";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Manejar cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Manejar el registro con email y password
  const handleEmailSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validar términos y condiciones
    if (!formData.agreeToTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            full_name: `${formData.firstName} ${formData.lastName}`
          }
        }
      });

      if (error) throw error;

      // Mostrar mensaje de éxito
      if (data.user) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          agreeToTerms: false
        });
        <Navigate to='/login'/>
      }

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error("Error al registrarse:", error);
      } else {
        setError("An unknown error occurred");
        console.error("Unknown error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  // Manejar el registro con Google
  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) throw error;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error("Error al registrarse con Google:", error);
      } else {
        setError("An unknown error occurred");
        console.error("Unknown error:", error);
      }
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={`${styles.authContainer} ${styles.floatUp}`}>
        <form className={styles.form} onSubmit={handleEmailSignUp}>
          <div className={`${styles.textCenter} ${styles.floatUp} ${styles.stagger1}`}>
            <div className={styles.logoContainer}>
              <img className={styles.logoImg} src="/images/tickly_logo.png" alt="Tickly Logo" />
            </div>
            <h1 className={styles.title}>Create your Account</h1>
            <p className={styles.subtitle}>Join the Tickly community and never miss an event.</p>
          </div>

          {/* Mostrar error si existe */}
          {error && (
            <div className={styles.errorMessage} style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          <div className={`${styles.formContent} ${styles.floatUp} ${styles.stagger2}`}>
            <div className={styles.gridContainer}>
              <div>
                <label className={styles.label} htmlFor="firstName">First Name</label>
                <div className={styles.inputWrapper}>
                  <span className={`material-symbols-outlined ${styles.icon}`}>person</span>
                  <input 
                    className={`${styles.input} ${styles.inputWithIcon}`}
                    id="firstName" 
                    placeholder="John" 
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              <div>
                <label className={styles.label} htmlFor="lastName">Last Name</label>
                <div className={styles.inputWrapper}>
                  <input 
                    className={styles.input}
                    id="lastName" 
                    placeholder="Doe" 
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="email">Email Address</label>
              <div className={styles.inputWrapper}>
                <span className={`material-symbols-outlined ${styles.icon}`}>email</span>
                <input 
                  className={`${styles.input} ${styles.inputWithIcon}`}
                  id="email" 
                  placeholder="you@example.com" 
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="password">Password</label>
              <div className={styles.inputWrapper}>
                <span className={`material-symbols-outlined ${styles.icon}`}>lock</span>
                <input 
                  className={`${styles.input} ${styles.inputWithIcon}`}
                  id="password" 
                  placeholder="••••••••" 
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                  minLength={6}
                />
              </div>
            </div>

            <div className={styles.checkboxContainer}>
              <input 
                className={styles.checkbox}
                id="agreeToTerms" 
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                disabled={loading}
              />
              <div className={styles.checkboxLabel}>
                <label htmlFor="agreeToTerms">
                  I agree to the <a className={styles.link} href="#">Terms of Service</a> and <a className={styles.link} href="#">Privacy Policy</a>.
                </label>
              </div>
            </div>

            <button 
              className={styles.submitButton} 
              type="submit"
              disabled={loading}
            >
              <span className="material-symbols-outlined">
                {loading ? 'hourglass_empty' : 'how_to_reg'}
              </span>
              <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
            </button>
          </div>

          <div className={`${styles.divider} ${styles.floatUp} ${styles.stagger3}`}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerText}>
              <span>OR</span>
            </div>
          </div>

          <button 
            className={`${styles.googleButton} ${styles.floatUp} ${styles.stagger3}`} 
            type="button"
            onClick={handleGoogleSignUp}
            disabled={loading}
          >
            <svg className={styles.googleIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span>Sign Up with Google</span>
          </button>

          <div className={`${styles.footer} ${styles.floatUp} ${styles.stagger3}`}>
            <p>
              Already have an account? <a className={styles.link} href="/login">Sign in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};