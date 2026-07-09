import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LegacyBuildMigration = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/CompatAndMigration/LegacyBuildMigration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Legacy Build Migration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LegacyBuildMigration;
