# Project Requirements for PPRF Backend

This document outlines the necessary software and configurations required to set up and run the PPRF (Project Product Requirement Forge) backend application.

## 1. Rust Toolchain

Ensure you have the latest stable Rust toolchain installed. We recommend using `rustup` for managing Rust versions.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

After installation, ensure `cargo` is available in your PATH:

```bash
cargo --version
```

## 2. PostgreSQL Database

The PPRF backend uses PostgreSQL as its primary database. You need to have a PostgreSQL server running and accessible.

### Installation (Example for Ubuntu/Debian):

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

### Database Setup:

Create a new database and a user with appropriate permissions for the PPRF application. Replace `your_username`, `your_password`, and `your_database_name` with your desired credentials.

```sql
CREATE USER your_username WITH PASSWORD 'your_password';
CREATE DATABASE your_database_name;
GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;
```

## 3. Environment Variables

The application relies on environment variables for sensitive information and configuration. Create a `.env` file in the `pprf_backend` directory (and also in the project root if you run from there) with the following variables:

```dotenv
DATABASE_URL=postgres://your_username:your_password@localhost:5432/your_database_name
GEMINI_API_KEY=your_gemini_api_key_here
MAX_DB_CONNECTIONS=5 # Optional, defaults to 5
```

**Important:** Do not commit `.env` files to version control.

## 4. Project Dependencies

All Rust dependencies are managed via `Cargo.toml`. To install them, navigate to the `pprf_backend` directory and run:

```bash
cargo build
```

This will download and compile all necessary crates, including:

- `sqlx`: Asynchronous PostgreSQL driver.
- `tokio`: Asynchronous runtime.
- `dotenv`: For loading environment variables from `.env` files.
- `thiserror`: For custom error types.
- `log`, `env_logger`: For robust logging.
- `assert_cmd` (dev-dependency): For integration testing.

## 5. Running the Application

Once all prerequisites are met, you can run the backend from the `pprf_backend` directory:

```bash
cargo run
```

This will start the PPRF backend application.