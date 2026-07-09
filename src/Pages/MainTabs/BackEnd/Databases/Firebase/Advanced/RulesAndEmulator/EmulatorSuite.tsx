import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
