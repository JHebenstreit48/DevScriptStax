import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Validations = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/ModelsAndAR/Validations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Validations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Validations;
