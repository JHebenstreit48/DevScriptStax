import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EnumeratorsAndLazy = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/Language/EnumeratorsAndLazy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Enumerators & Lazy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnumeratorsAndLazy;
