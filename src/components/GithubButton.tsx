import React from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

const GithubButton = () => {
  return (
    <a
      href="https://github.com/codewithdipesh/Ok-Quizz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-md"
    >
      <Button variant="link">
        <GitHubLogoIcon className="mr-2 h-4 w-4" />Give a Star
      </Button>
    </a>
  );
};

export default GithubButton;
