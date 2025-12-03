export default function AuthInput({ label, type, icon, value, setValue }) {
  return (
    <div className="auth-input">
      <label>{label}</label>

      <div className="input-wrapper">
        <span className="auth-icon">{icon}</span>

        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
