import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParamsAndStrongParams = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/RoutingAndControllers/ParamsAndStrongParams';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Params & Strong Params" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndStrongParams;
