import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GoModules = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Modules/GoModules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Go Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GoModules;
