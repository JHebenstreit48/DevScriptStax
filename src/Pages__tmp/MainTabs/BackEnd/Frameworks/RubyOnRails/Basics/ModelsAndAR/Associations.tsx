import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Associations = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/ModelsAndAR/Associations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Associations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Associations;
