import React, { ReactElement } from 'react';
import StyledAnchor from '../article/styledAnchor';

export default function Footer(): ReactElement {
  return (
    <footer className="bg-gray-300">
      <div className="container mx-auto p-10 text-center">
        <p>
          Copyright (C) 2023 Yeonjin Shin, All rights reserved
          <br />
          This website, except the original image used for the fox background image, is licensed under{' '}
          <StyledAnchor href="https://www.gnu.org/licenses/gpl-3.0.html">
            GNU General Public License Version 3
          </StyledAnchor>
          , or (at your option) any later version.
          <br />
          Source code of this website is available on{' '}
          <StyledAnchor href="https://github.com/litehell/litehell.github.io">GitHub</StyledAnchor>
        </p>
      </div>
    </footer>
  );
}
