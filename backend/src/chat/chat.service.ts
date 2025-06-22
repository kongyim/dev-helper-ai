import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateChatDto } from './dto/create-chat.dto';

type OllamaResponse = {
  response: string;
  // add other fields if needed
};

@Injectable()
export class ChatService {
  async chat(dto: CreateChatDto) {
    const res = await axios.post<OllamaResponse>(
      'http://localhost:11434/api/generate',
      {
        model: 'llama3',
        prompt: dto.prompt,
        stream: false,
      },
    );

    return res.data.response;
  }
}
