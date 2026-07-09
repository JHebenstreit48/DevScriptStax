import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GoModules = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Modules/GoModules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Go Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GoModules;
