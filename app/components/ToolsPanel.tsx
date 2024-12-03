'use client';

import {useSession} from 'next-auth/react';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import Stripe from '@/public/stripe-gray.svg';
import {File as FileIcon, PanelLeftClose, X, Sparkles} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Switch} from '@/components/ui/switch';
import {Label} from '@/components/ui/label';
import {useEmbeddedComponentBorder} from '../hooks/EmbeddedComponentBorderProvider';
import {useToolsContext} from '../hooks/ToolsPanelProvider';
import * as React from 'react';
import CreatePaymentsButton from './testdata/CreatePaymentsButton';
import LocaleSelector from './Tools/LocaleSelector';
import ThemePicker from './Tools/ThemePicker';
import CreateInterventionsButton from './testdata/CreateInterventionsButton';
import CreatePayoutsButton from './testdata/CreatePayoutsButton';
import CreateCheckoutSessionButton from './testdata/CreateCheckoutSessionButton';
import Container from './Container';

const ToolsPanel = () => {
  const pathname = usePathname();
  const {data: session} = useSession();

  const stripeAccount = session?.user?.stripeAccount;

  const [showMobileNavItems, setShowMobileNavItems] = React.useState(false);
  const {handleEnableBorderChange, enableBorder} = useEmbeddedComponentBorder();
  const {handleOpenChange} = useToolsContext();
  const [border, setBorder] = React.useState(true);
  const [theme, setTheme] = React.useState('light');
  const [locale, setLocale] = React.useState('english');
  const [overlay, setOverlay] = React.useState('dialog');

  const actions = [
    {
      description: 'Create a test payment',
      href: '/payments',
      component: CreatePaymentsButton,
    },
    {
      description: 'Create a checkout session',
      href: '/payments',
    },
    {
      description: 'Create a test payout',
      href: '/payouts',
      component: CreatePayoutsButton,
    },
    {
      description: 'Simulate a risk intervention',
      href: '/settings',
      component: CreateInterventionsButton,
    },
    {
      description: 'Create a Checkout Session',
      href: '/settings',
      component: CreateCheckoutSessionButton,
    },
    {
      description: 'Simulate a risk intervention',
      href: '/home',
      component: CreateInterventionsButton,
    },
  ];

  const CustomTools = () => {
    return (
      <div className="mt-4 flex flex-col items-stretch gap-2">
        {actions.map(
          (action) =>
            pathname.includes(action.href) &&
            action.component && (
              // <Button
              //   className="my-1 rounded-lg border border-[#D8DEE4] bg-white py-1 text-sm font-medium shadow"
              //   variant="secondary"
              //   key={action.description}
              // >
              //   {action.description}
              // </Button>
              <action.component key={action.description} />
            )
        )}
      </div>
    );
  };

  const DefaultTools = () => {
    return (
      <div className="my-6 flex flex-col gap-y-4 text-lg font-medium">
        <div className="flex flex-row items-center justify-between rounded-lg">
          <Label className="text-left" htmlFor="outline">
            Component outlines
          </Label>
          <Switch
            className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-[#EBEEF1]"
            id="outline"
            checked={border}
            onCheckedChange={() => handleEnableBorderChange(!border)}
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Label className="text-left" htmlFor="theme">
            Theme
          </Label>
          <ThemePicker />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Label className="text-left align-middle" htmlFor="outline">
            Locale
          </Label>
          <LocaleSelector />
        </div>
        {/* <div className="flex flex-row justify-between">
          <Label className="text-left" htmlFor="outline">
            Overlay style
          </Label>
          <OverlaySelector />
        </div> */}
      </div>
    );
  };

  React.useEffect(() => {
    setBorder(enableBorder);
  }, [enableBorder]);

  return (
    <div className="flex h-full w-full flex-col justify-between bg-tools-background p-5">
      <Button
        variant="ghost"
        className="absolute right-4 top-4 px-2 md:hidden"
        onClick={() => handleOpenChange(false)}
      >
        <X size={20} />
      </Button>
      <div>
        <div className="flex items-center gap-x-2 text-lg font-bold text-primary">
          <Sparkles size={20} />
          Tools
        </div>
        <DefaultTools />
        <hr />
        <div className="my-4 flex items-center gap-x-2 text-lg font-bold text-primary">
          <FileIcon size={20} />
          On this page
        </div>
        <CustomTools />
      </div>
      <div className="my-4 flex flex-grow items-end sm:mb-6">
        <Container>
          <div className="flex h-min flex-row gap-2">
            <span>
              <Sparkles className="text-accent" size={20} />
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-subdued">
                About this integration
              </span>
              <div className="text-sm font-normal text-subdued">
                This demo site is built using the Account V2 API and various
                embedded products.{' '}
                <a
                  className="text-accent transition hover:opacity-80"
                  href="https://github.com/stripe/stripe-connect-furever-demo/tree/v2-accounts-main"
                  target="_blank"
                >
                  View it on GitHub
                </a>
                {' or '}
                <a
                  className="text-accent transition hover:opacity-80"
                  href="https://docs.stripe.com/connect/accounts-v2/saas-platform-payments-billing"
                  target="_blank"
                >
                  view the docs.
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="hidden justify-between md:flex">
        <Image src={Stripe} alt="stripe logo" height={24} />
        <Button
          variant="secondary"
          className="gap-1.5 px-3 py-2 text-sm"
          onClick={() => handleOpenChange(false)}
        >
          <PanelLeftClose size={20} />
          Close{' '}
        </Button>
      </div>
    </div>
  );
};

export default ToolsPanel;
