import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Validations = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/ModelsAndAR/Validations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Validations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Validations;
