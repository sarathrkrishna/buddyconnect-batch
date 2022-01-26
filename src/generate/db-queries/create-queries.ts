export const createClientMasterQuery = `
    CREATE TABLE IF NOT EXISTS client_master (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL CONSTRAINT password_length_check CHECK (char_length(password) > 8),
        full_name TEXT NOT NULL,
        description TEXT,
        display_picture_url TEXT,
        is_disabled BOOLEAN NOT NULL DEFAULT false,
        create_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
`;

export const createChatDataQuery = `
    CREATE TABLE IF NOT EXISTS chat_data (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        chat_name TEXT,
        group_display_picture_url TEXT,
        creator_id uuid REFERENCES client_master(id) ON DELETE CASCADE NOT NULL,
        is_group BOOLEAN NOT NULL DEFAULT false,
        create_at TIMESTAMP DEFAULT NOW(),
        last_updated TIMESTAMP NOT NULL
    )
`;

export const createChatMasterQuery = `
    CREATE TABLE IF NOT EXISTS chat_master (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        client_id uuid REFERENCES client_master(id) ON DELETE CASCADE NOT NULL,
        chat_id uuid REFERENCES chat_data(id) ON DELETE CASCADE NOT NULL,
        is_deleted BOOLEAN DEFAULT false
    )
`;

export const createMessageDataQuery = `
    CREATE TABLE IF NOT EXISTS message_data (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        message_body TEXT NOT NULL,
        sender_id uuid REFERENCES client_master(id) ON DELETE CASCADE NOT NULL,
        chat_id uuid REFERENCES chat_data(id) ON DELETE CASCADE NOT NULL,
        create_at TIMESTAMP DEFAULT NOW()
    )
`;
