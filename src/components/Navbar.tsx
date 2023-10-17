'use client';

import { useTheme } from 'next-themes';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Skeleton } from '@/components/ui/skeleton';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const handleToggle = () => {
    console.log('theme', theme);
    const newTheme =
      theme === 'system' ? 'light' : theme === 'dark' ? 'light' : 'system';
    setTheme(newTheme);
  };
  return (
    <div className="container mx-auto">
      <h1>My Navbar</h1>
      <button className="bg-blue-500 text-4xl" onClick={handleToggle}>
        theme info
      </button>
      <div className="flex flex-col md:flex-row">
        <div className="space-y-3">
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
        <Skeleton className="w-[100px] h-[100px] rounded-full" />
      </div>
      <center>
        <AlertDialog>
          <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => console.log('Hello world')}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </center>
    </div>
  );
}
