import { json, redirect } from '@remix-run/node';

import { H1, H2, Pre, RadixScrollArea } from '~/components';
import { configAvailableThemes, configApp, configThemes } from '~/configs';
import { getSession, commitSession } from '~/features';
import { useLoaderData } from '~/hooks';
import { Layout } from '~/layouts';

import type { ActionFunction, LoaderFunction, Theme } from '~/types';
import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const themeFromSession = await session.get('theme');

  const themeParsed: Theme = themeFromSession
    ? JSON.parse(themeFromSession)
    : configApp?.theme;

  const sessionInfo = {
    theme: themeParsed,
    user: (await session.get('user')) || {},
    error: (await session.get('error')) || false,
  };

  const currentTheme = configAvailableThemes.find((item) => {
    return item.id === themeParsed.colorScheme;
  });

  return json({
    sessionInfo,
    currentTheme,
    themes: configThemes,
    availableThemes: configAvailableThemes,
  });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export default function DebugRoute() {
  const { sessionInfo, currentTheme, themes, availableThemes } =
    useLoaderData();

  return (
    <Layout>
      <H1>Debug</H1>

      <H2>Session Data</H2>
      <Pre>{sessionInfo}</Pre>

      <H2>Current Theme</H2>
      <Pre>{currentTheme}</Pre>

      <H2>Config Themes</H2>
      <RadixScrollArea>
        <Pre>{themes}</Pre>
      </RadixScrollArea>

      <H2>Config Available Themes</H2>
      <RadixScrollArea>
        <Pre>{availableThemes}</Pre>
      </RadixScrollArea>
    </Layout>
  );
}