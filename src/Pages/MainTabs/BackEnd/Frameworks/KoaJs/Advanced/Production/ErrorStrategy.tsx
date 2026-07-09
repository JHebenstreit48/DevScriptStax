import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorStrategy = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Production/ErrorStrategy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Strategy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorStrategy;
