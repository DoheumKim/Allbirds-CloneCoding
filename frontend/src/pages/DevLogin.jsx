// src/pages/DevLogin.jsx
import { useState } from "react";
import styled from "styled-components";
import { loginUser } from "@/api/userAPI";

const Wrapper = styled.div`
  max-width: 480px;
  margin: 80px auto;
  padding: 24px 16px;
  font-family: "Pretendard", sans-serif;
`;

const Field = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 14px;
  outline: none;
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 10px 24px;
  border: 1px solid #111;
  background-color: #111;
  color: #fff;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 16px;
  font-size: 14px;
`;

export const DevLogin = () => {
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    setMsg("로그인 시도 중...");

    try {
      const data = await loginUser(loginName, password);
      console.log("login success:", data);
      setMsg("로그인 성공! 이제 헤더 사람 아이콘으로 마이페이지를 테스트해보세요.");
    } catch (error) {
      console.error("login error:", error);
      const status = error.response?.status;
      const serverMsg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "서버 응답을 확인하세요 (Network 탭).";

      setMsg(`로그인 실패 (status: ${status}) - ${serverMsg}`);
    }
  };

  return (
    <Wrapper>
      <h1>개발용 로그인 테스트</h1>
      <p style={{ fontSize: 14, marginBottom: 16 }}>
        백엔드에 이미 존재하는 계정의 <b>loginName / password</b>를 넣고 로그인 테스트를 합니다.
      </p>

      <Field>
        <Label>loginName</Label>
        <Input
          value={loginName}
          onChange={(e) => setLoginName(e.target.value)}
          placeholder="예: doheum"
        />
      </Field>

      <Field>
        <Label>password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
      </Field>

      <Button type="button" onClick={handleLogin}>
        로그인
      </Button>

      <Message>{msg}</Message>
    </Wrapper>
  );
};
