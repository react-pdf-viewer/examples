import type { RenderProtectedViewProps } from '@react-pdf-viewer/core';
import { PasswordStatus, PrimaryButton, TextBox, Viewer } from '@react-pdf-viewer/core';
import * as React from 'react';

const ProtectedView: React.FC<RenderProtectedViewProps> = ({ passwordStatus, verifyPassword }) => {
    const [password, setPassword] = React.useState('');
    const submit = (): void => verifyPassword(password);

    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
            }}
        >
            <div
                style={{
                    width: '20rem',
                }}
            >
                <div
                    style={{
                        marginBottom: '0.5rem',
                    }}
                >
                    <TextBox
                        placeholder="Enter the password ..."
                        type="password"
                        value={password}
                        onChange={setPassword}
                    />
                </div>
                {passwordStatus === PasswordStatus.WrongPassword && (
                    <div
                        style={{
                            color: '#c02424',
                            marginBottom: '0.5rem',
                        }}
                    >
                        The password is invalid. Please try again!
                    </div>
                )}
                <PrimaryButton onClick={submit}>Submit</PrimaryButton>
            </div>
        </div>
    );
};

interface CustomizeProtectedViewExampleProps {
    fileUrl: string;
}

const CustomizeProtectedViewExample: React.FC<CustomizeProtectedViewExampleProps> = ({ fileUrl }) => {
    return <Viewer fileUrl={fileUrl} renderProtectedView={(renderProps) => <ProtectedView {...renderProps} />} />;
};

export default CustomizeProtectedViewExample;
