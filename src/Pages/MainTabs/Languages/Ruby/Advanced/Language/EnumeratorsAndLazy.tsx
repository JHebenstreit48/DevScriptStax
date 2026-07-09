import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
