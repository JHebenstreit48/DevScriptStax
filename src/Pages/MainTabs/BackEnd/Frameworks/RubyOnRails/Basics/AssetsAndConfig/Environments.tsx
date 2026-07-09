import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Environments = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/AssetsAndConfig/Environments';

  return (
    <>
      <PageLayout>
        <PageTitle title="Environments" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Environments;
