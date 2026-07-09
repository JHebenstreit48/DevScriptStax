import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
