import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
