import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EmulatorSuite = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/RulesAndEmulator/EmulatorSuite';

  return (
    <>
      <PageLayout>
        <PageTitle title="Emulator Suite" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EmulatorSuite;
