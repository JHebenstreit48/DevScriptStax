import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JSInterop = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Interop/JSInterop';

  return (
    <>
      <PageLayout>
        <PageTitle title="JS Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSInterop;
