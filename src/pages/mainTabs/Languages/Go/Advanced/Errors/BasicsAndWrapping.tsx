import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BasicsAndWrapping = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Errors/BasicsAndWrapping';

  return (
    <>
      <PageLayout>
        <PageTitle title="Basics & Wrapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicsAndWrapping;
